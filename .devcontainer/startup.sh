#!/bin/bash

echo ""
echo -e "\e[32m[Nova] Installing dependencies and spinning up a dev server... \e[0m"

echo ""
echo ""
echo -e "\e[32m[Nova] Installing dependencies. \e[0m"
pnpm install

echo ""
echo ""
echo -e "\e[32m[Nova] Starting development server... \e[0m"
nuxt dev --no-fork
