import { useSizeContext } from '../../../../contexts/SizeContextProvider';
import NewUserGift from './NewUserGift/NewUserGift';
import RecentProductView from './RecentProductView/RecentProductView';

const ProfileMobile = () => {
    const { isMobile } = useSizeContext();
    return (
        <>
            <RecentProductView />
            {isMobile && <NewUserGift />}
        </>
    );
};

export default ProfileMobile;
