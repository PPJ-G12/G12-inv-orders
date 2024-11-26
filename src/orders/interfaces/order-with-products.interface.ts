import {OrderStatus} from "@prisma/client";

export interface OrderWithProducts {
    OrderItem: {
        productId: number;
        quantity: number;
        price: number;
        name: any;
    }[];
    id: string;
    totalAmount: number;
    totalItems: number;
    status: OrderStatus;
    paid: boolean;
    paidAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}