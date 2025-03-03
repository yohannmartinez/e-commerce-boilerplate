import { error } from '@sveltejs/kit';
import { supabase } from '@/supabase';
import type { PageServerLoad } from './$types';
import type { ProductWithMedias } from '@/types/product';

export const load: PageServerLoad = async ({ params }) => {
	const { productId } = params;
	const { data, error: productFetcherror } = await supabase
		.from<'products', ProductWithMedias>('products')
		.select('*, productMedias(*)')
		.eq('id', productId)
		.order('displayOrder', { referencedTable: 'productMedias', ascending: true })
		.single();

	if (productFetcherror) {
		console.error('Erreur de chargement des produits:', productFetcherror);
		throw error(404, 'Produit introuvable');
	}

	const product: ProductWithMedias = data;

	return { product };
};
