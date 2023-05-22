import Head from "next/head";
import Header from "../components/Header"
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect } from 'react';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';

export default function Home(){ //represents the home page of the Google Docs clone

  return (
    <div>
      <Head> {/*allows you to modify the <head> section of the HTML document */}
        <title>Google Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="bg-gray-100 pb-8 px-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-centre justify-between py-6">
            <h2 className="text-gray-900 text-lg">Start a new document</h2>

            <MoreVertIcon className="h-6 w-6 text-gray-600" />
          </div>
          <div>

          <Link href ="/posts/text-editor">
            <div className='relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700' >
               

              <Image
              src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
              layout="fill" 

              
              />
            </div>
            </Link>
          
            <p className="ml-2 mt-2 font-semibold text-sm text-gray-800">Blank</p>
            
            
            </div>
        </div>
      </section>

      <section className='bg-white px-10 md:px-0'>
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-900">
          <div className="flex items-centre justify-between pb-5">
            <h2 className='font-medium flex-grow'>My Documents</h2>
            <p className="mr-12">Date Created</p>
            <FolderOpenOutlinedIcon className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </section>
    </div>
  ); 
}

  