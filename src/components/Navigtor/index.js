import { Link } from 'react-router-dom'
import {
  HomeOutlined,
  CalendarOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import NavigatorStyle from './styles';

const NavigatorList = () => (
  <div className='navgatorList'>
    <Link className='navItem' to={'/'}>
      <HomeOutlined />
      <span>HOME</span>
    </Link>
    <Link className='navItem' to={'/blog'}>
      <CalendarOutlined />
      <span>BLOG</span>
    </Link>
    <Link className='navItem' to={'/archive'}>
      <ProfileOutlined />
      <span>TIMELINE</span>
    </Link>
    <Link className='navItem' to={'/me'}>
      <UserOutlined />
      <span>ABOUT</span>
    </Link>
  </div>
);

const Navigator = () => (
  <NavigatorStyle>
    <div className='logo'>
      <img className='avatar' src='http://blog-images.fiveseven.top/avatar.JPG' alt='logo' />
      <span>SeveNyUs' blog</span>
    </div>
    <NavigatorList />
  </NavigatorStyle>
);
export default Navigator;
  