# Starter base

A starting point to help you set up your project quickly and use the common components provided by `react-native-reusables`. The idea is to make it easier for you to get started.

## Features

- NativeWind v4
- Dark and light mode
  - Android Navigation Bar matches mode
  - Persistant mode
- Common components
  - ThemeToggle, Avatar, Button, Card, Progress, Text, Tooltip

<p align="center">
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-getting-started"><strong>Getting started</strong></a> ·
  <a href="#%EF%B8%8F-scripts-overview"><strong>Scripts overview</strong></a> ·
  <a href="#-contribution"><strong>Contribution</strong></a> ·
  <a href="#%EF%B8%8F-support"><strong>Support</strong></a>
</p>

## 🎉 Features

- 🚀 React Native (App router)
- 📘 Typescript
- 🎨 TailwindCSS - Class sorting, merging and linting
- 🛠️ React-native-reuseables - Customizable UI components
- 📋 React-hook-form - Manage your forms easy and efficient
- 🔍 Zod - Schema validation library
- 📈 Absolute Import & Path Alias - Import components using `@/` prefix
- 💅 Prettier - Code formatter
- 🧹 Eslint - Code linting tool
- 🔹 Icons - From Lucide
- 🌑 Dark mode - With next-themes

## 🎯 Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Start Project

```bash
npx expo start
```

## 📁 Project structure

```bash
.
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── prisma                          # Prisma schema and migrations
├── public                          # Public assets folder
└── app
    └── (tabs)                      # Tab navigation
        ├── _layout                 # tab layout
        ├── explore                 # Explore screen
        ├── card                    # Form components
        ├── index                   # Welcome page
└── assets
    └── fonts                       # font folder
    └── images                      # image folder
└── components
    └── navigation
        ├── TabBarIcon              # TabBar Icon component
    └── Shared                      # Contains examples of all the components
    └── ui
        ├── alert-dialog
        ├── alert
        ├── aspect-ratio
        ├── avatar
        ├── badge
        ├── button
        ├── card
        ├── checkbox
        ├── collapsible
        ├── context-menu
        ├── data-table
        ├── dialog
        ├── dropdown-menu
        ├── form
        ├── index
        ├── input
        ├── label
        ├── popover
        ├── progress
        ├── radio-group
        ├── select
        ├── separator
        ├── skeleton
        ├── switch
        ├── table
        ├── tabs
        ├── text
        ├── textarea
        ├── tooltip
    ├── Collapsible
    ├── ExternalLink
    ├── HelloWave
    ├── ModalToggle
    ├── ParallaxScrollView
    ├── ThemedText
    ├── ThemedView
    ├── ThemeToggle
└── constants
    └── Colors
└── hooks
    └── useColorScheme
    └── useColorScheme.web
    └── useThemeColor
└── lib
    └── icons                      # Icons
    └── android-navigation-bar
    └── constants
    └── useColorScheme
    └── utils
```

## ⚙️ Scripts overview

The following scripts are available in the `package.json`:

- `dev`: Run development server
- `dev:web`: Run development web server
- `dev:android`: Run android server
- `ios`: Run IOS server

## 🤝 Contribution

To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes, and commit them.
4. Push your changes to the forked repository.
5. Create a pull request.

## ❤️ Support

If you liked the project, I will appreciate if you leave a star. 🌟😊

Made by <a href="https://esenwa.netlify.app/">Michaeł Esenwa</a>
