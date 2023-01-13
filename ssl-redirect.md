<script>
// Don't force https when serving the website locally
if (!(window.location.host.startsWith("127.0.0.1")) && (window.location.protocol != "https:"))
    window.location.protocol = "https";
</script>