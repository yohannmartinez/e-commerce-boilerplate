export type Product = {
	id: number;
	created_at: number;
	name: string;
	description: string;
	price: number;
	status: 'creating' | 'sold' | 'available' | 'reserved';
	video: string;
	materials: string;
	dimensions: string;
};

export type ProductWithMedias = Product & { productMedias: ProductMedia[] };

export type ProductMedia = {
	id: number;
	created_at: number;
	productId: number;
	link: string;
	type: 'image' | 'video';
};
