# Stock Trading Portfolio Management System

This is a **full-stack application** for managing a stock trading portfolio. It includes a **backend** built with NestJS and a **frontend** built with Next.js. The system allows users to record trades, calculate portfolio value, and visualize portfolio metrics.

---

## Features

- **Trade Management:**
  - Record buy/sell transactions.
  - View all trades.
- **Portfolio Calculations:**
  - Calculate total portfolio value based on live stock prices.
  - Compute profit/loss for each stock and the overall portfolio.
- **Visualization:**
  - Interactive charts to visualize stock performance and profit/loss trends.

---

## Prerequisites

- **Docker** ([Install Docker](https://docs.docker.com/get-docker/))
- **Docker Compose** ([Install Docker Compose](https://docs.docker.com/compose/install/))

---

## Setup Instructions

### 1. Clone the Repository

2. Start the Application
Run the following command to start the Postgres database, backend, and frontend

docker-compose up --build

This will:

Build the Docker images for the backend and frontend.

Start the Postgres database.

Start the backend and frontend services.


How to Use
1. Record a Trade
Go to the frontend at http://localhost:3001.

Use the form to record a buy/sell transaction.

2. View All Trades
Navigate to the "Trades" page to view all recorded trades.

3. View Portfolio Metrics
Go to the "Portfolio" page to see:

Total portfolio value.

Profit/loss for each stock.

Interactive charts for stock performance.

Testing the Application
Backend
Use the Swagger UI at http://localhost:3000/api to test the backend API endpoints.

Frontend
Interact with the frontend at http://localhost:3001 to:

Record trades.

View portfolio metrics.

Visualize stock performance.

Stopping the Application
To stop the application, press Ctrl+C in the terminal where Docker Compose is running, or run:

docker-compose down