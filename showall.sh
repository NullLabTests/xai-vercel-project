#!/bin/bash

# Navigate to your project directory
cd /home/illy/aaProj/XAI_Vercel

# Display directory structure
echo "Directory Structure:"
tree

# Display contents of each file
echo -e "\nFile Contents:\n"

# Loop through all files in the directory
for file in *; do
    if [ -f "$file" ]; then
        echo -e "\nContent of $file:"
        cat "$file"
    fi
done
