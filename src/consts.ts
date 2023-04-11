export const SITE = {
	title: 'DRIPSENDER A-Z',
	description: 'Buku Panduan Dripsender A to Z',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://dripsender.id/wp-content/uploads/2022/06/logo-dripsender-new-1536x277.png',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	Indonesia: 'id',
	
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const CONTACT_ADMIN = `https://wa.me/6285155415050`;

export const DRIPSENDER_URL = `https://dripsender.id`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'BAB 1 : Kenalan Dengan Dripsender': [
			{ text: '✅ Aplikasi Whatsapp Marketing Revolusioner', link: 'en/post-1' },
			{ text: '✅ Fitur-Fitur yang Dimiliki Dripsender', link: 'en/post-2' },
			{ text: '✅ Bedanya Dripsender dengan Aplikasi Serupa', link: 'en/post-3' },
			{ text: '✅ Dripsender Keren? Ternyata Begini Sejarah Lahirnya..', link: 'en/post-4' },
		],
		'BAB 2 : Dripsender dan Mindset Bisnis Kekinian': [
			{ text: '✅ Whatsapp Itu Nggak Ada Obat!', link: 'en/post-5' },
			{ text: '✅ Harus Pakai Whatsapp, Kalau Enggak…..', link: 'en/post-6' },
			{ text: '✅ Mau Banyak Closing? Lakukan Hal Ini Dengan Cepat', link: 'en/post-7' },
			{ text: '✅ Kalau Bisa Otommatis, Kok Milih Manual?', link: 'en/post-8' },
			{ text: '✅ Hemat Pengeluaran, Modalnya Bisa Untuk Kulakan..', link: 'en/post-9' },
			{ text: '✅ Rangkuman Mindset Bisnis yang Sederhana', link: 'en/post-10' },
		],
		'BAB 3 : Mengelola Nomor WhatsApp Pada Dripsender': [
			{ text: '✅ Pertama, Mari Hubungkan Whatsapp ke Dripsender', link: 'en/post-11' },
			{ text: '✅ Membaca Detail Koneksi Nomor WA Pada Dripsender', link: 'en/post-12' },
			{ text: '✅ Menambah Admin Pada Dripsender', link: 'en/post-13' },
			{ text: '✅ Menghapus Nomor Whatsapp dari Dripsender', link: 'en/post-14' },
			{ text: '✅ Mengembalikan / Restore Nomor WA Pada Dripsender', link: 'en/post-15' },
			{ text: '✅ Status Whatsapp Terhubung atau Terputus?', link: 'en/post-16' },
		],
		'BAB 4 : Membangun dan Mengelola Database': [
			{ text: '✅ Edit Nomor / Nama Kontak di Database', link: 'en/post-17' },
			{ text: '✅ Export Database', link: 'en/post-18' },
			{ text: '✅ Membuat List Database', link: 'en/post-19' },
			{ text: '✅ Menghapus List Database', link: 'en/post-20' },
			{ text: '✅ Mengisi List Database Dripsender', link: 'en/post-21' },
		],
	},

	id: {
		'BAB 1 : Kenalan Dengan Dripsender': [
			{ text: '✅ Aplikasi Whatsapp Marketing Revolusioner', link: 'id/post-1' },
			{ text: '✅ Fitur-Fitur yang Dimiliki Dripsender', link: 'id/post-2' },
			{ text: '✅ Bedanya Dripsender dengan Aplikasi Serupa', link: 'id/post-3' },
			{ text: '✅ Dripsender Keren? Ternyata Begini Sejarah Lahirnya..', link: 'id/post-4' },
		],
		'BAB 2 : Dripsender dan Mindset Bisnis Kekinian': [
			{ text: '✅ Whatsapp Itu Nggak Ada Obat!', link: 'id/post-5' },
			{ text: '✅ Harus Pakai Whatsapp, Kalau Enggak…..', link: 'id/post-6' },
			{ text: '✅ Mau Banyak Closing? Lakukan Hal Ini Dengan Cepat', link: 'id/post-7' },
			{ text: '✅ Kalau Bisa Otommatis, Kok Milih Manual?', link: 'id/post-8' },
			{ text: '✅ Hemat Pengeluaran, Modalnya Bisa Untuk Kulakan..', link: 'id/post-9' },
			{ text: '✅ Rangkuman Mindset Bisnis yang Sederhana', link: 'id/post-10' },
		],
		'BAB 3 : Mengelola Nomor WhatsApp Pada Dripsender': [
			{ text: '✅ Pertama, Mari Hubungkan Whatsapp ke Dripsender', link: 'id/post-11' },
			{ text: '✅ Membaca Detail Koneksi Nomor WA Pada Dripsender', link: 'id/post-12' },
			{ text: '✅ Menambah Admin Pada Dripsender', link: 'id/post-13' },
			{ text: '✅ Menghapus Nomor Whatsapp dari Dripsender', link: 'id/post-14' },
			{ text: '✅ Mengembalikan / Restore Nomor WA Pada Dripsender', link: 'id/post-15' },
			{ text: '✅ Status Whatsapp Terhubung atau Terputus?', link: 'id/post-16' },
		],
		'BAB 4 : Membangun dan Mengelola Database': [
			{ text: '✅ Edit Nomor / Nama Kontak di Database', link: 'id/post-17' },
			{ text: '✅ Export Database', link: 'id/post-18' },
			{ text: '✅ Membuat List Database', link: 'id/post-19' },
			{ text: '✅ Menghapus List Database', link: 'id/post-20' },
			{ text: '✅ Mengisi List Database Dripsender', link: 'id/post-21' },
		],
	},
};
