import {gql} from '@apollo/client';

export const ENUM_ORDER_STATUS = gql`
    enum OrderStatus {
        PENDING
        CONFIRMED
        DELIVERED
        CANCELED
    }
    `;