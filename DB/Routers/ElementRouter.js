import { Router } from 'express'
import AddElement from '../Controllers/Element/CreateElement.js'
import { deleteElement } from '../Controllers/Element/DeleteElement.js'
import { GetAllUserElements } from '../Controllers/Element/GetElementByUser.js'
const ElementRouter = Router()
ElementRouter.post('/MakeElement', AddElement)
ElementRouter.get('/GetUserElements', GetAllUserElements)
ElementRouter.delete('/DeleteElement', deleteElement)
export default ElementRouter
