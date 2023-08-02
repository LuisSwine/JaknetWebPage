import routerx from 'express-promise-router'
import usercontroller from '../controllers/UserController'
import auth from '../middlewares/auth'

const router = new routerx();

router.post("/register",usercontroller.register);
router.put("/update",usercontroller.update);
router.get("/list",auth.verifyAdmin,usercontroller.list);
router.post("/login",usercontroller.login);
router.post("/login_admin",usercontroller.login_admin);
router.delete("/delete",usercontroller.remove);

export default router;