import { error } from '@sveltejs/kit';
import { supabase } from '@/supabase';
import type { PageServerLoad } from './$types';
import type { ProductWithMedias } from '@/types/product';
export const load: PageServerLoad = async ({ url }) => {
	let page: number = Number(url.searchParams.get('page')) || 1;

	if (page === 0 || typeof page !== 'number') {
		page = 1;
	}

	const start = 11 * page - 11;
	const end = 11 * page;

	const { data, error: productsFetchError } = await supabase
		.from<'products', ProductWithMedias[]>('products')
		.select('*, productMedias(*)')
		.order('id', { ascending: true })
		.order('displayOrder', { referencedTable: 'productMedias', ascending: true })
		.range(start, end);

	if (productsFetchError) {
		console.error('Erreur de chargement des produits:', productsFetchError);
		throw error(404, 'Produit introuvable');
	}

	const { count, error: countFetchError } = await supabase
		.from('products')
		.select('*', { count: 'exact', head: true });

	if (countFetchError) {
		console.error('Erreur de chargement des produits:', countFetchError);
		throw error(404, 'Produit introuvable');
	}

	const products: ProductWithMedias[] = data;
	const productsCount: number | null = count;

	return { products, page, productsCount };
};
