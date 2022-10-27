import { BsCode, BsEmojiSunglasses } from 'react-icons/bs';
import { GiCakeSlice, GiGalaxy, GiLipstick } from 'react-icons/gi';
import { FaPaw, FaMedal, FaGamepad } from 'react-icons/fa';

export const topics = [
  {
    name: 'coding',
    icon: <BsCode />,
  },
  {
    name: 'comedy',
    icon: <BsEmojiSunglasses />,
  },
  {
    name: 'gaming',
    icon: <FaGamepad />,
  },
  {
    name: 'food',
    icon: <GiCakeSlice />,
  },
  {
    name: 'dance',
    icon: <GiGalaxy />,
  },
  {
    name: 'beauty',
    icon: <GiLipstick />,
  },
  {
    name: 'animals',
    icon: <FaPaw />,
  },
  {
    name: 'sports',
    icon: <FaMedal />,
  },
];



export const samplePost = {
  _id: '60f1c7b0b0b5a8a0b4b0b0b0',

  caption: 'Coding video',
  video: {
    _id: '60f1c7b0b0b5a8a0b4b0b0b0',
    videoUrl: '/media/ReactvsAngular.mp4',
  },
  likes: 100,
  comments: {
    _key: '60f1c7b0b0b5a8a0b4b0b0b0',
    comment: 'Nice video',
    postedBy: {
      _id: '60f1c7b0b0b5a8a0b4b0b0b0',
      userName: 'John',
      image: '/media/John.png',
    },
  },
  userId: '60f1c7b0b0b5a8a0b4b0b0b0',
  postedBy: {
    _id: '60f1c7b0b0b5a8a0b4b0b0b0',
    name: 'Susan Wairimu',
    username: 'sue_nimoh',
    email: '',
    image: '/media/IMG_20220630_145632.jpg',
    followers: 0,
    following: 0,
  },
};

export const footerList1 = ['About', 'Newsroom', 'Store', 'Contact', 'Careers', 'ByteDance', 'Creator Directory']
export const footerList2 = ['TikTok for Good', 'Advertise', 'Developers', 'Transparency', 'TikTok Rewards']
export const footerList3 = ['Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines']