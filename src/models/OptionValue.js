import { sequelize } from '../config/db.js';
import { DataTypes } from 'sequelize';

export const OptionValue = sequelize.define('OptionValue', {
  id: { 
    type: DataTypes.UUID, 
    defaultValue: DataTypes.UUIDV4, 
    primaryKey: true 
},
  value: { 
    type: DataTypes.STRING, 
    allowNull: false 
}
});