//Una vez que se logea el usuario llega a estas rutas 
import { admin } from "../controllers/panelControllers";


const router = express.Router(); 

router.get('/admin', admin)