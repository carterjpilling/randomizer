module.exports = {
  newList: async (req, res) => {
    const db = req.app.get('db')
    const { category, list } = req.body

    const [array] = list

    await db.new_list([category, array])

    res.sendStatus(200)
  },
  newCategory: async (req, res) => {
    const db = req.app.get('db')
    const { category } = req.body
    await db.new_category([category])

    res.sendStatus(200)
  }
}