# Horizon banking app

Built with Next.js, Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.
## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Technologies](#technologies)
- [Demo](#demo)


## Features

👉 Authentication: An ultra-secure SSR authentication with proper validations and authorization

👉 Connect Banks: Integrates with Plaid for multiple bank account linking

👉 Home Page: Shows general overview of user account with total balance from all connected banks, recent transactions, money spent on different categories, etc

👉 My Banks: Check the complete list of all connected banks with respective balances, account details

👉 Transaction History: Includes pagination and filtering options for viewing transaction history of different banks

👉 Real-time Updates: Reflects changes across all relevant pages upon connecting new bank accounts.

👉 Funds Transfer: Allows users to transfer funds using Dwolla to other accounts with required fields and recipient bank ID.

👉 Responsiveness: Ensures the application adapts seamlessly to various screen sizes and devices, providing a consistent user experience across desktop, tablet, and mobile platforms.

## Usage

- **Creating an account**: To log in to the application, you need to fill out the registration form: the data does not have to be real but must meet the form requirements.
  
- **Connect a bank account**: you need to add a bank account using Plaid: choose any bank and go through the process of adding the account to the application.
  
- **Login and password**: Username and password for adding a bank account using Plaid:
  
  login:  user_good
  
  password:  pass_good
  

## Used Technologies

- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- React Hook Form
- Zod
- TailwindCSS
- Chart.js
- ShadCN

## Demo

You can try Horizon banking app live [here](https://banking-app-seven-navy.vercel.app/).
