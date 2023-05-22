import Link from 'next/link';
import DescriptionIcon from '@mui/icons-material/Description';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button } from '@material-tailwind/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextEditor from '@/components/TextEditor';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

function FirstPost() {
  return (

    <div>
        <header className="flex justify-between items-centre p-3 pb-1">
        <Link href="/"> {/*<Link> component wraps the <DescriptionIcon> component which allows you to navigate to a pages when clicked. */}

        < DescriptionIcon className="h-12 w-12 text-blue-500" />
        </Link>
    <div className="flex-grow px-2">
        <span className="text-lg font-normal">Untitled Document</span>
        <StarBorderOutlinedIcon className="cursor-pointer hover:bg-gray-200 h-4 w-4 text-gray-800 ml-4" />

        <div className="flex items-centre text-sm space-x-1 -ml-1 h-8 text-gray-600">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
            <p className="option">Extensions</p>
            <p className="option">Help</p>
        </div>
    </div>

    <div>
      <VideoCallOutlinedIcon className='cursor-pointer hover:bg-gray-200 h-10 w-10  text-gray-600' />
    </div>

    <div>
      <ArrowDropDownIcon className=' cursor-pointer hover:bg-gray-200 h-5 w-5 mr-2 text-gray-600 -translate-y-1/5' />
    </div>
    <Button>
        <LockOutlinedIcon className="h-6 w-5 mr-2 text-gray-800 rounded-lg" /> Share

    </Button>

    <div className="relative">
        <AccountCircleIcon className="cursor-pointer rounded-full h-12 w-12 ml-2 text-purple-400 " />
          
        </div>

     </header>
     <TextEditor/>
    </div>
    
  );
}

export default FirstPost;