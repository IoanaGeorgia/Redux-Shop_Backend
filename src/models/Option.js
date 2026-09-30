import { sequelize } from '../config/db.js';
import { DataTypes } from 'sequelize';

export const Option = sequelize.define('Option', {
  id: { 
    type: DataTypes.UUID, 
    defaultValue: DataTypes.UUIDV4, 
    primaryKey: true 
  },
  name: { 
    type: DataTypes.STRING, 
    allowNull: false
  }
});