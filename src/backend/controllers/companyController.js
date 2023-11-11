const companyModel = require( "../model/companies");

const getAllCompanies = async (req, res) => {
    try {
        const companies = await companyModel.find();
        res.status(200).json(companies);
    } catch(error) {
        console.log("Something went wrong!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

const postCompany = async (req, res) => {
    const company = new companyModel(req.body);
    try {
        await company.save();
        res.status(201).json(company);

    } catch(error) {
        console.log("Error posting data!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

module.exports = { getAllCompanies, postCompany };