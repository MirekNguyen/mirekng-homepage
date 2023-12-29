# mirekng.com

<p align="center">
<img width="400" alt="homepage-preview" style="display:inline;" src="https://user-images.githubusercontent.com/65291610/221811754-7a217237-9c91-454a-ad6e-fedf0a0804c6.jpg">
<img width="400" alt="homepage-preview" style="display:inline;" src="https://user-images.githubusercontent.com/65291610/221811458-a42a75a9-f498-41da-b216-332b9d87eb50.jpg">
</p>

This is my personal website built with Next.js and TailwindCSS.<br>
<br>
Please feel free to visit my website at [mirekng.com](https://mirekng.com/) to learn more about me and my projects.

## Getting Started

### Prerequisites

You will need npm or pnpm installed on your system.

## Installation

1. Clone the repository: `git clone https://github.com/mireknguyen/mirekng-homepage.git`
2. Navigate to the project directory: `cd mirekng-homepage`

## Usage

### 1. Locally using pnpm

1. Install dependencies: `pnpm install`
2. Start the development server: `pnpm run dev`
3. Open `http://localhost:3000` in your browser

### 2. docker cli

1. Run docker container:
```bash
docker run -p 3000:3000 mireknguyen/mirekng-homepage
```
2. Open `http://localhost:3000` in your browser

### 3. docker compose

1. Run docker compose: `docker-compose up -d`
2. Open `http://localhost:3000` in your browser

#### Alternatively you can add this configuration to your server (Nginx proxy pass)
```yml
version: '3'

services:
  mirekng:
    image: mireknguyen/mirekng-homepage
    container_name: mirekng
    ports:
      - 3000:3000
    restart: unless-stopped
```
