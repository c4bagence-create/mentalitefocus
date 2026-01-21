#!/bin/bash
# Script de synchronisation Focus → Hostinger
# Usage: ./sync-hostinger.sh

FTP_HOST="31.170.164.126"
FTP_USER="u905320307"
FTP_PASS="Shopify93!"
LOCAL_DIR="/Users/c4b/bmad-smma-agency/clients/focus/hostinger"

echo "🚀 Synchronisation Focus → Hostinger"
echo "===================================="

cd "$LOCAL_DIR"

# Upload mode clair (racine)
echo ""
echo "📄 Upload index.html (mode clair)..."
curl -s -T "index.html" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/index.html"
echo "  ✓ index.html"

# Upload mode sombre
echo ""
echo "🌙 Upload dark/index.html (mode sombre)..."
curl -s -T "dark/index.html" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/dark/index.html" --ftp-create-dirs
echo "  ✓ dark/index.html"

# Upload images mode clair
echo ""
echo "🖼️  Upload assets/images..."
for file in assets/images/*; do
    filename=$(basename "$file")
    curl -s -T "$file" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/assets/images/$filename" --ftp-create-dirs
    echo "  ✓ $filename"
done

# Upload images mode sombre
echo ""
echo "🖼️  Upload dark/assets/images..."
for file in dark/assets/images/*; do
    filename=$(basename "$file")
    curl -s -T "$file" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/dark/assets/images/$filename" --ftp-create-dirs
    echo "  ✓ $filename"
done

echo ""
echo "===================================="
echo "✅ Synchronisation terminée!"
echo ""
echo "🌐 Mode clair: https://mentalitefocus.com"
echo "🌙 Mode sombre: https://mentalitefocus.com/dark/"
