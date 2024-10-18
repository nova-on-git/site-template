FROM node:18

# Install git and pnpm
RUN apt-get update && \
    apt-get install -y tmux && \
    apt-get install -y git && \
    npm install -g pnpm@9.11.0 nuxt && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

COPY . /app
RUN pnpm install 

# Copy the rest of the project files

COPY .devcontainer/startup.sh /usr/local/bin/startup.sh
RUN chmod +x /usr/local/bin/startup.sh

USER root
EXPOSE 3000