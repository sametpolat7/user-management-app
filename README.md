 == Concern ==

Including the full library in development bundles can slow startup times, particularly with "named imports" from @mui/icons-material, which can be up to six times slower than "default imports". https://mui.com/material-ui/guides/minimizing-bundle-size