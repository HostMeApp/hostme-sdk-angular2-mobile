import * as models from './models';
export interface CreateCustomerReservation {
    restaurantId: number;
    reservationTime: Date;
    groupSize: number;
    notificationUrl?: string;
    deviceType: string;
    areas: string;
    note?: string;
    highChair?: boolean;
    stroller?: boolean;
    customerProfile?: models.Profile;
    party?: boolean;
    email?: string;
    fullName?: string;
    phoneNumber?: string;
}
