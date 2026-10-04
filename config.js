module.exports = {
    // --- Настройки Pterodactyl ---
    api: "https://gcp.pterohost.com/api/", // Важно: URL с /api/ и слэшем на конце
    key: "ptlc_WXWT8gYiYuqXJR5HhQ22QkYbVhOm5eZYBrkYq2Wgjp7", 

    // --- Настройки Discord ---
    bot: {
        token: "MTU1NjIyNzk5NjU3MzExNDM2OA.G_MZrD.T2oZNKtHwPLhKUNRIcxYhx74S8eUu7E8EMi1IA",
        channels: {
            status: "1556226564989919303" // ID канала, куда бот будет писать
        }
    },
    
    // --- Фильтры ---
    // Сюда можно вписать имена серверов, которые НЕ нужно отображать
    filteredServers: [] 
};
