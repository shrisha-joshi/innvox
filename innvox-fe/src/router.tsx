import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Placements from './pages/Placements';
import ApplicationForm from './components/placement/ApplicationForm';
import ApplicationSuccess from './pages/ApplicationSuccess';
import PlacementManagement from './pages/admin/PlacementManagement';
import PrivateRoute from './components/auth/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/placements',
    element: <Placements />
  },
  {
    path: '/placements/apply/:id',
    element: (
      <PrivateRoute>
        <ApplicationForm />
      </PrivateRoute>
    )
  },
  {
    path: '/placements/application-success',
    element: <ApplicationSuccess />
  },
  {
    path: '/admin/placements',
    element: (
      <PrivateRoute adminOnly>
        <PlacementManagement />
      </PrivateRoute>
    )
  },
  // Add other existing routes here
]); 