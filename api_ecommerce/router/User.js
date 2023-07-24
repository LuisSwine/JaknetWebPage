import routerx from 'express-promise-router'
import usercontroller from '../controllers/UserController'

const router = new routerx();

router.post("/register",usercontroller.register);
router.put("/update",usercontroller.update);
router.get("/list",usercontroller.list);
router.put("/login",usercontroller.login);
router.delete("/delete",usercontroller.remove);

export default router;