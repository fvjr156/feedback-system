import { DataTypes } from "sequelize";
import { MyDatabase } from "../config/mysql_database_config.mjs";

export const Form = MyDatabase.define(
  "Form",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    form_name: {
      type: new DataTypes.STRING(512),
      allowNull: false,
    },
    msforms_form_id: {
      type: new DataTypes.STRING(512),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "tbl_fs_forms",
  }
);

export const FormResponse = MyDatabase.define(
  "FormResponse",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    msforms_form_id: {
      type: new DataTypes.STRING(512),
      allowNull: false,
    },
    msforms_response_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    submit_timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    respondent_email: {
      type: new DataTypes.STRING(512),
      allowNull: false,
    },
    response_data: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    tableName: "tbl_fs_formresponses",
  }
);

FormResponse.belongsTo(Form, {
  foreignKey: "msforms_form_id",
  targetKey: "msforms_form_id",
});
