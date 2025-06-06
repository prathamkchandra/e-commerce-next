'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getCatalogwithProduct } from '@/actions/catalog/getCatalogwithProduct';

import ProductCatalog from '@/components/ui/productCatalog';
import { ICatalog } from '@/types/catalog.d';
import { IProductsEntity } from 'oneentry/dist/products/productsInterfaces';

export default function HomePage() {
  const [products, setProducts] = useState<ICatalog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const catalogs = await getCatalogwithProduct(); 

      if (catalogs?.length) {
        const transformedCatalogs = catalogs.map((catalog) => ({
          ...catalog,
          catalogProducts: {
            items: catalog.catalogProducts.items.map(
              (item: { localizeInfos: { title: string } }) => ({
                ...item,
                localizeInfos: {
                  title: item.localizeInfos?.title || 'Default Title',
                },
              })
            ),
          },
        }));
        setProducts(transformedCatalogs);
      }
      setIsLoading(false);
    };
    getData();
  }, []);


  console.log(products, "Whats in products")
  return (
    <div className='min-h-screen'>
      <main className='container mx-auto px-4 py-8'>
        <section className='mb-12 '>
          <div className='relative overflow-hidden rounded-lg shadow-lg '>
            <div className='w-full h-[400px] relative'>
              <div className='absolute inset-0 flex flex-col justify-center items-center text-center p-8'>
                <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent z-3'>
                  Welcome to our Store!
                </h2>
                <p className='text-xl mb-8 text-gray-700 z-4'>
                  Discover the latest trends and exclusive deals on your
                  favorite products. Shop now and enjoy a seamless shopping
                  experience!
                </p>
                <img
                  src='https://imgs.search.brave.com/y-ort2mR7eJKi48om1KbD2MFM2N4zYUyRKCTj2n4Tvg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzk4LzYwLzcy/LzM2MF9GXzU5ODYw/NzIxOF9GQXJoYXVo/VWpjVVdGbDRHWGVx/bEdjVHE4SUl3VDJU/dy5qcGc'
                  alt='Hero Image'
                  className='absolute inset-0 w-full h-full object-cover opacity-40 z-1'
                />
                <Button className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white z-2 cursor-pointer'>
                  Shop Now
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>
        </section>
        {isLoading && (
          <div className='flex justify-center items-center h-64'>
            <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-purple-900'></div>
          </div>
        )}
        {products.map((catalog) => (
          <ProductCatalog
            key={catalog?.id}
            title={catalog?.localizeInfos?.title as string}
            products={
              catalog.catalogProducts.items as unknown as IProductsEntity[]
            }
          />
        ))}
      </main>
    </div>
  );
}