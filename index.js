
const express = require('express');
const mongoose = require('mongoose');
const Donor = require('./models/Donors');
const Volunteer = require('./models/Volunteer');
const cors = require('cors');
const app = express();


mongoose.connect('mongodb://localhost:27017/project', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database connected');
}) 


app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('main.ejs')
})

app.get('/howTo', (req, res) => {
    res.render('howTo.ejs')
})

app.get('/videos', (req, res) => {
    res.render('videos.ejs')
})

app.get('/bloodDonation', (req, res) => {
    res.render('bloodDonation.ejs')
})

app.get('/donationslist', (req, res) => {
    res.render('donationList.ejs')
})

app.get('/d/:id', async (req, res) => { 
    try {
        const donor = await Donor.findById(req.params.id);
        res.render('donor.ejs', {donor})
    } catch (error) {
        console.log(error);
    }
});


app.get('/volunteering', (req, res) => {
    res.render('volunteering.ejs')
})

app.get('/volunteers', (req, res) => {
    res.render('volunteers.ejs')
})

app.get('/v/:id', async (req, res) => {
    try {
        const volunteer = await Volunteer.findById(req.params.id);
        res.render('volunteer.ejs', {volunteer})
    } catch (error) {
        console.log(error);
    }
});


app.post('/api/', async (req, res) => { 
    try {
        const donor = await Donor.create(req.body);
        res.status(201).json({ 
            success: true,
            data: donor
        })
    } catch (error) {
        res.status(500).json({
            success: false, 
        })
    }
})




app.get('/api/getAllBloodDonors', async (req, res) => {
    try {
        const donors = await Donor.find({});
        res.status(200).json({
            success: true,
            data: donors 
        })
    } catch (error) {
        res.status(500).json({
            success: false,
        })
    }
})

app.delete('/api/:id', async (req, res) => {
    try {
        await Donor.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            data: 'Donor Deleted'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
        })
    }
})


app.put('/api/:id', async (req, res) => {
    try {
        const donor = await Donor.findByIdAndUpdate(req.params.id, { $set: {...req.body}})
        res.status(200).json({
            success: true,
            data: donor
        })
    } catch (error) {
        res.status(500).json({
            success: false,
        })
    }
})


app.post('/api/volunteer', async (req, res) => {
    try {
        const volunteer = await Volunteer.create(req.body);
        res.status(201).json({
            success: true,
            data: volunteer
        })
    } catch (error) {
        res.status(500).json({
            success: false,
        })
    }
})

app.get('/api/getAllVolunteers', async (req, res) => {
    try {
        const volunteer = await Volunteer.find({});
        res.status(200).json({
            success: true,
            data: volunteer
        })
    } catch (error) {
        res.status(500).json({
            success: false,
        })
    }
})

app.delete('/api/volunteer/:id', async (req, res) => {
    try {
        await Volunteer.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            data: 'Volunteer Deleted'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
        })
    }
})



app.listen(5000, () => {
    console.log(`Server connected on port ${5000}`);
})