const Github = require('../model/repo')

exports.create = async (req, res, next) => {
  try {
    const Create = await Github.create(req.body)
    if (!Create) {
      res.status(404).json({
        success: false,
        message: 'Error creating',
      })
    }
    res.status(200).json({
      data: Create,
      success: true,
      message: 'Created successfully',
    })
  } catch (error) {
    next(error)
  }
}

exports.getAll = async (req, res, next) => {
  try {
    const getall = await Github.find()
    res.status(200).json({
      data: getall,
      success: true,
      message: "Github Repo's fetched",
    })
  } catch (error) {
    next(error)
  }
}

exports.getById = async (req, res, next) => {
  try {
    const getById = await Github.findById(req.params.id)
    if (!getById) {
      res.status(404).json({
        success: false,
        message: 'No such repository',
      })
    }
    res.status(200).json({
      data: getById,
      success: true,
      message: 'Repository has been fetched',
    })
  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {
    const update = await Github.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!update) {
      res.status(404).json({
        success: false,
        message: 'No such repository',
      })
    }
    res.status(200).json({
      data: update,
      success: true,
      message: 'Repository has been updated',
    })
  } catch (error) {
    next(error)
  }
}

exports.delete = async (req, res, next) => {
  try {
    const Delete = await Github.findByIdAndDelete(req.params.id)
    if (!Delete) {
      res.status(404).json({
        success: false,
        message: 'No such repository',
      })
    }
    res.status(204).json({
      data: Delete,
      success: true,
      message: 'Deleted repository successfully',
    })
  } catch (error) {
    next(error)
  }
}

exports.getAllPage = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1

    const itemsPerPage = 10

    const skip = (page - 1) * itemsPerPage

    const getall = await Github.find().skip(skip).limit(itemsPerPage)

    res.status(200).json({
      data: getall,
      success: true,
      message: `Github Repo's fetched (Page ${page})`,
    })
  } catch (error) {
    next(error)
  }
}
