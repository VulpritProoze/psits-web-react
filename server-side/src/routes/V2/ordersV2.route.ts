import { Router } from "express";
import {
    getSpecificOrdersController,
    getAllOrdersController,
    getAllPendingOrdersController,
    getAllPaidOrdersController,
    studentAndAdminOrderController,
    cancelOrderController,
    approveOrderController,
    getAllPendingCountController
} from "../../controllers/order.controller";
import { requireAccessTokenV2 } from "../../middlewares/authV2.middleware";

const router = Router();


//Get specific order via id_number
router.get("/",
    // both_authenticate, 
    // requireAccessTokenV2,
    getSpecificOrdersController
);

//Get all orders
router.get("/get-all-orders",
    // admin_authenticate, 
    getAllOrdersController
);

//get all pending orders
router.get(
    "/get-all-pending-orders",
    // admin_authenticate,
    getAllPendingOrdersController
);

//Get all paid orders
router.get(
    "/get-all-paid-orders",
    // admin_authenticate,
    getAllPaidOrdersController
);

router.post(
    "/student-order",
    // both_authenticate,
    studentAndAdminOrderController
);

// Cancel Order
router.put("/cancel/:product_id",
    // both_authenticate,
    cancelOrderController
);

router.put(
    "/approve-order",
    // admin_authenticate,
    // role_authenticate(["admin", "finance"]),
    approveOrderController
);

// orders.js (backend api)
router.get(
    "/get-all-pending-counts",
    // admin_authenticate,
    getAllPendingCountController
);

export default router;