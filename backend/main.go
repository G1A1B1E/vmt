package main

import (
   "github.com/gin-gonic/gin"
)

func main() {
   r := gin.Default()

   // Initialize routes
   initRoutes(r)

   // Start server
   r.Run(":8080")
}
