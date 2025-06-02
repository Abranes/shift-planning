import setuptools

with open('VERSION.txt', 'r') as f:
    version = f.read().strip()

setuptools.setup(
    name="odoo14-addons-oca-shift-planning",
    description="Meta package for oca-shift-planning Odoo addons",
    version=version,
    install_requires=[
        'odoo14-addon-hr_shift',
    ],
    classifiers=[
        'Programming Language :: Python',
        'Framework :: Odoo',
        'Framework :: Odoo :: 14.0',
    ]
)
