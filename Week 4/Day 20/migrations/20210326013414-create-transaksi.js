"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("transaksi", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_barang: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_pelanggan: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      jumlah: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
      // Make id_barang foreign key
      await queryInterface.addConstraint("transaksi", {
        fields: ["id_barang"],
        type: "foreign key",
        name: "custom_fkey_id_barang",
        references: {
          //Required field
          table: "barang",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      });
  
    // Make id_pelanggan foreign key
    await queryInterface.addConstraint("transaksi", {
      fields: ["id_pelanggan"],
      type: "foreign key",
      name: "custom_fkey_id_pelanggan",
      references: {
        //Required field
        table: "pelanggan",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("transaksi");
  },
};
