export const FORM_1_DATA = {
    "title": "CLOSE CONTROL UNIT MAINTENANCE TEST RECORD",
    "steps": [
        {
            "title": "Summary",
            "controls": [
                {
                    "id": "client",
                    "label": "Client",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "unit_manufacturer",
                    "label": "Unit Manufacturer",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "date",
                    "label": "Date",
                    "type": "date",
                    "required": true
                },
                {
                    "id": "model_number",
                    "label": "Model Number",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "engineer",
                    "label": "Engineer",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "serial_number",
                    "label": "Serial Number",
                    "type": "text",
                    "required": true
                }
            ]
        },
        {
            "title": "Section 1: System Details",
            "controls": [
                {
                    "id": "system_type",
                    "label": "System Type",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "air_water_cooled",
                    "label": "Air/Water Cooled?",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "temperature_set_point",
                    "label": "Temperature Setpoint",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "dead_band",
                    "label": "Dead band",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "humidity_setpoint",
                    "label": "Humidity Setpoint",
                    "type": "text",
                    "required": true
                }
            ]
        },
        {
            "title": "Section 2: Electrical Checks",
            "controls": [
                {
                    "id": "compressor_fla",
                    "label": "Compressor FLA",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "compressor_u_namps",
                    "label": "COMPRESSORR U NAMPS",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "main_fan_fla",
                    "label": "MAIN FAN FLA",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "main_fan_run_amps",
                    "label": "MAIN FAN RUN AMPS",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "humidifier_fla",
                    "label": "Humidifier FLA",
                    "type": "text",
                    "required": true
                }
            ]
        },
        {
            "title": "Section 3: Refrigeration circuit checks",
            "controls": [
                {
                    "id": "gas_type",
                    "label": "Gas Type",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "suction_pressure",
                    "label": "Suction Pressure",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "suction_temperature",
                    "label": "Suction Temperature",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "discharge_pressure",
                    "label": "Discharge Pressure",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "discharge_temperature",
                    "label": "Discharge Temperature",
                    "type": "text",
                    "required": true
                }
            ]
        }
    ]
}