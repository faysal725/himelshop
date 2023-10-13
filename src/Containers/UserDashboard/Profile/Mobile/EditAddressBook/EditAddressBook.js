import EditAddress from '../../../Address/EditAddress';
import './EditAddressBook.scss';

const EditAddressBook = () => {
    return (
        <div className="edit-address-book">
            <h6 className="mb-3">Edit Address Book</h6>
            <EditAddress isLink />
        </div>
    );
};

export default EditAddressBook;
