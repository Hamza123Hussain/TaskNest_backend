import { Router } from 'express'
import AddElement from '../Controllers/Element/CreateElement.js'
import { deleteElement } from '../Controllers/Element/DeleteElement.js'
const ElementRouter = Router()
ElementRouter.post('/MakeElement', AddElement)

ElementRouter.delete('/DeleteElement', deleteElement)
export default ElementRouter
