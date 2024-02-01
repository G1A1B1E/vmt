package main

import (
   "github.com/gin-gonic/gin"
)

func initRoutes(r *gin.Engine) {
   // Public routes
   r.POST("/register", registerHandler)
   r.POST("/login", loginHandler)

   // Authenticated routes
   auth := r.Group("/api")
   auth.Use(authMiddleware)
   {
      auth.GET("/vehicles", getVehiclesHandler)
      auth.POST("/vehicles", addVehicleHandler)
      auth.PUT("/vehicles/:id", updateVehicleHandler)
      auth.DELETE("/vehicles/:id", deleteVehicleHandler)
   }
}
