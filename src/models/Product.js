import { sequelize } from '../config/db.js';
import { DataTypes } from 'sequelize';

export const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  topProduct:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  }
});