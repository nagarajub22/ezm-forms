export const FORM_2_DATA = {
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
                },
                {
                    "id": "dead_band_1",
                    "label": "Dead band",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "humidifier_type",
                    "label": "Humidifier Type",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "humidifier_condition",
                    "label": "Humidifier Condition",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "room_temperature",
                    "label": "Room Temperature",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "room_humidity",
                    "label": "Room Humidity",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "general_casing_condition",
                    "label": "General Casing Condition",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "electrical_condition",
                    "label": "Electrical Condition",
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
                    "id": "compressor_run_namps",
                    "label": "COMPRESSORR RUN AMPS",
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
                },
                {
                    "id": "humidifier_run_amps",
                    "label": "HUMIDIFIER RUN AMPS",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "heater_1_fla",
                    "label": "HEATER 1 FLA",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "heater_1_run_amps",
                    "label": "HEATER 1 RUN AMPS",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "heater_2_fla",
                    "label": "HEATER 2 FLA",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "heater_2_run_amps",
                    "label": "HEATER 2 RUN AMPS",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "heater_3_fla",
                    "label": "HEATER 3 FLA",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "heater_3_run_amps",
                    "label": "HEATER 3 RUN AMPS",
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
                },
                {
                    "id": "liquid_line_temperature",
                    "label": "Liquid Line Temperature",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "sight_glass_state",
                    "label": "SIGHT GLASS STATE",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "outside_ambient_temp",
                    "label": "OUTSIDE AMBIENT TEMP",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "air_off_cond",
                    "label": "AIR OFF COND",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "air_on_cond",
                    "label": "AIR ON COND",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "no_of_cond_fans",
                    "label": "NO OF COND FANS",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "cond_fans_run_amps",
                    "label": "COND FANS RUN AMP",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "leak_test_system",
                    "label": "LEAK TEST SYSTEM",
                    "type": "text",
                    "required": true
                }
            ]
        },
        {
            "title": "Section 4: Mechanical Checks",
            "controls": [
                {
                    "id": "main_fan_vee_belts",
                    "label": "MAIN FAN VEE BELTS",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "drive_package_alignment",
                    "label": "DRIVE PACKAGE ALIGNMENT",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "grease_bearings",
                    "label": "GREASE BEARINGS",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "indoor_air_filters",
                    "label": "INDOOR AIR FILTERS",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "compressor_oil_levels",
                    "label": "COMPRESSOR OIL LEVELS",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "compressor_mountings",
                    "label": "COMPRESSOR MOUNTINGS",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "general_bracketing",
                    "label": "GENERAL BRACKETING",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "evap_coil_condition",
                    "label": "EVAP COIL CONDITION",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "cond_coil_condition",
                    "label": "COND COIL CONDITION",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "pipework_condition",
                    "label": "PIPERWORK CONDITION",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "alarms_cleared",
                    "label": "ALARMS CLEARED",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "clean_out_interiors_sections",
                    "label": "CLEAN OUT INTERIOR SECTIONS",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "clean_around_cond_section",
                    "label": "CLEAN AROUND COND SECTION",
                    "type": "text",
                    "required": true
                }
            ]
        }
    ]
}