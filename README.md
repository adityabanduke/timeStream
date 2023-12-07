
# Front-End Task

## Project Overview

This project implements a front-end solution with the following features:

1. A card view displaying compound names and their images.
2. Pagination for easy navigation through the compounds.
3. Routing to a detailed view page for each compound, displaying compound name, image, and description.

## Getting Started

### Prerequisites

- Node.js installed on your machine

### 1. Compounds Card page

- Displays compound names and images as separate cards.
![homePg](https://github.com/adityabanduke/timeStream/assets/124374844/3bbdf090-c631-47d8-806a-9f9624a7d617)

### 2. Pagination

- Allows users to navigate through multiple pages of compounds.

### 3. Routing to Detailed Compound page

- Clicking on a card navigates to a detailed view page displaying:
  - Compound Name
  - Compound Image
  - Description
 ![detailPg](https://github.com/adityabanduke/timeStream/assets/124374844/746d424c-82f1-4abb-a7cf-52dff5e9fe79)

### 4. Compound Edit page
![upadatePg](https://github.com/adityabanduke/timeStream/assets/124374844/2b7f8175-bf68-4a4a-a1a6-b2649ab5da1f)

Certainly! Below is a README file template for your backend task. Adjust it based on your specific project structure, technologies used, and any additional details you'd like to include.

---

## Backend Task

## Project Overview

This project implements a CRUD API to manage a list of compounds and their details. 

## API Endpoints

#### router.post("/addCompound", addCompound);
#### router.get("/getCompounds", getCompounds);
#### router.get("/getCompound/:id", getCompound);
#### router.put("/updateCompound/:id", updateCompound);
#### router.delete("/deleteCompound/:id", deleteCompound);
#### router.get("/getLimitedCompounds", getLimitedCompounds);

### ThankYou

