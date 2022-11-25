import React from 'react';
import PrivateCustomer from '../components/ProtectedCompontnts/PrivateCustomer';

const checkout = () => {
    return (
        <div>
            <PrivateCustomer>
                <h1>checkout</h1>
            </PrivateCustomer>
        </div>
    );
};

export default checkout;