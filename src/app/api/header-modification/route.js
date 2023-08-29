const HeaderModificationApi = (req, res) => {
    const token = req.headers.authorization;
    const modifiedToken = `Bearer ${token}`;

    res.setHeader('Authorization', modifiedToken);
    res.status(200).end();
};

export default HeaderModificationApi;
