const {barang, pelanggan, pemasok, transaksi} = require("../models");


class TransaksiController{
    
    //get all
    async getAll(req, res){
        try {
            let data = await transaksi.find();

            //if no data
            if (data.length === 0){
                return res.status(404).json({
                    message: "transaksi not found",
                });
            }

            //if success
            return res.status(200).json({
                message:"succeess",
                data,
            });

        } catch (e) {
            return res.status(500).json({
                message: "internal server error",
                error: e,
            });
        }
    }
}

module.exports = new TransaksiController();