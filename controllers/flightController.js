const { Flight } = require("../model/Flight");
const {v4: uuid } = require ("uuid");

//Get all Flight

exports.getFlight = async (req, res)=> {
    try {
        const flight = Flight;
        res.status(200).json({
            message: "All flight",
            flight: flight,
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }

};

//get a single Flight
exports.getFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flight.find ((flight) => flight.id === id);
        res.status(200).json({
            message: "Flight Booked",
            flight,
        });
    } catch (error) {}
};
// add/Book a flight
exports.createFlight = async (req, res) => {
    try {
        const { title, price, date, time }= await req.body;
        const newFlight = {
            id: uuid(),
            title,
            price,
            date:new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        };
        Flight.push(newFlight);

        res.status(201).json({
            message: "Flight added",
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//update/Edit Flight
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
    const flight = Flight.find((flight) => 
    flight.id ===id);
    const {title, time, price, date } = await req.body;
    flight.title = title;
    flight.price = price;
    flight.time = time;
    flight.date = date
    res.status(200).json ({
        message: "Flight updated",
        flight,
    });

    } catch (err) {
        res.status(500).json({message: err.message });
    }
};

//delete Flight

exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const user = Flight. find ((flight) => flight.id === id)
        Flight.splice(Flight.indexOf(flight), 1);
        res.status(200).json({
            message: "Flight deleted",
            flight,
        });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

