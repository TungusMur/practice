import telegram from '../../assets/img/SocialNetwork/telegram.svg';
import telegramHover from '../../assets/img/SocialNetwork/telegramHover.svg';
import facebook from '../../assets/img/SocialNetwork/facebook.svg';
import facebookHover from '../../assets/img/SocialNetwork/facebookHover.svg';
import instagram from '../../assets/img/SocialNetwork/instagram.svg';
import instagramHover from '../../assets/img/SocialNetwork/instagramHover.svg';

export const navigationItems = [
  { id: 0, link: 'parking', ruChapter: 'ПАРКОВКА', enChapter: 'PARKING' },
  { id: 1, link: 'insurance', ruChapter: 'СТРАХОВКА', enChapter: 'INSURANCE' },
  { id: 2, link: 'gasoline', ruChapter: 'БЕНЗИН', enChapter: 'GASOLINE' },
  { id: 3, link: 'service', ruChapter: 'ОБСЛУЖИВАНИЕ', enChapter: 'SERVICE' },
];

export const socialNetworkItems = [
  { id: 0, link: 'https://tlgrm.ru/', chapter: 'telegram', img: telegram, imgHover: telegramHover },
  { id: 1, link: 'https://www.facebook.com/', chapter: 'facebook', img: facebook, imgHover: facebookHover },
  { id: 2, link: 'https://www.instagram.com/', chapter: 'instagram', img: instagram, imgHover: instagramHover },
];
