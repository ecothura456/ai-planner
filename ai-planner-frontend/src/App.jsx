import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import PlannerResult from './pages/PlannerResult'
import SavedPlans from './pages/SavedPlans'
import CreatePlanner from './pages/CreatePlanner'
import PlannerDetail from './pages/PlannerDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreatePlanner />} />
        <Route path='/result' element={<PlannerResult />} />
        <Route path='/saved-plans' element={<SavedPlans />} />
        <Route path='/plans/:id' element={<PlannerDetail />} />
      </Routes>
    </>
  )
}

export default App