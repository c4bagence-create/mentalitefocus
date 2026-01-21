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

# Upload CSS mode clair
echo ""
echo "🎨 Upload css/..."
for file in css/*; do
    filename=$(basename "$file")
    curl -s -T "$file" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/css/$filename" --ftp-create-dirs
    echo "  ✓ $filename"
done

# Upload CSS mode sombre
echo ""
echo "🎨 Upload dark/css/..."
for file in dark/css/*; do
    filename=$(basename "$file")
    curl -s -T "$file" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/dark/css/$filename" --ftp-create-dirs
    echo "  ✓ $filename"
done

# Upload JS mode clair
echo ""
echo "⚡ Upload js/..."
for file in js/*; do
    filename=$(basename "$file")
    curl -s -T "$file" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/js/$filename" --ftp-create-dirs
    echo "  ✓ $filename"
done

# Upload JS mode sombre
echo ""
echo "⚡ Upload dark/js/..."
for file in dark/js/*; do
    filename=$(basename "$file")
    curl -s -T "$file" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/dark/js/$filename" --ftp-create-dirs
    echo "  ✓ $filename"
done

# Upload Analytics Dashboard
echo ""
echo "📊 Upload analytics/..."
curl -s -T "analytics/index.html" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/analytics/index.html" --ftp-create-dirs
echo "  ✓ analytics/index.html"

# Upload pages legales
echo ""
echo "📜 Upload pages legales..."
curl -s -T "legal.html" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/legal.html" 2>/dev/null && echo "  ✓ legal.html"
curl -s -T "privacy.html" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/privacy.html" 2>/dev/null && echo "  ✓ privacy.html"
curl -s -T "terms.html" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/terms.html" 2>/dev/null && echo "  ✓ terms.html"
curl -s -T "dark/legal.html" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/dark/legal.html" 2>/dev/null && echo "  ✓ dark/legal.html"
curl -s -T "dark/privacy.html" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/dark/privacy.html" 2>/dev/null && echo "  ✓ dark/privacy.html"
curl -s -T "dark/terms.html" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/dark/terms.html" 2>/dev/null && echo "  ✓ dark/terms.html"

echo ""
echo "===================================="
echo "✅ Synchronisation terminée!"
echo ""
echo "🌐 Mode clair: https://mentalitefocus.com"
echo "🌙 Mode sombre: https://mentalitefocus.com/dark/"
echo "📊 Analytics: https://mentalitefocus.com/analytics/"
echo "   Mot de passe: Focus2026!"
